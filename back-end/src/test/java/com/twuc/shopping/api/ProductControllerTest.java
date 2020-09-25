package com.twuc.shopping.api;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.twuc.shopping.domain.Product;
import com.twuc.shopping.po.ProductPO;
import com.twuc.shopping.repository.ProductRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class ProductControllerTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;
    @Autowired
    ProductRepository productRepository;

    Product getDemoProduct() {
        return new Product("cola", 1, "ting", "https://example.com/cola.png");
    }

    void assertIsDemoProduct(Product product) {
        assertEquals("cola", product.getName());
        assertEquals(1, product.getPrice());
        assertEquals("ting", product.getUnit());
        assertEquals("https://example.com/cola.png", product.getImage());
    }

    @Test
    void should_get_products() throws Exception {

        productRepository.save(getDemoProduct().toProductPO());
        String responseContent = mockMvc.perform(get("/product"))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString();
        List<Product> products = objectMapper.readValue(responseContent, new TypeReference<List<Product>>() {
        });
        assertEquals(1, products.size());
        assertIsDemoProduct(products.get(0));
    }

    @Test
    void should_add_product() throws Exception {
        Product product = getDemoProduct();
        String productId = mockMvc.perform(post("/product")
                .content(objectMapper.writeValueAsString(product))
                .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isCreated()).andReturn().getResponse().getHeader("id");
        assertNotNull(productId);
        int id = Integer.parseInt(productId);
        ProductPO productPO = productRepository.findById(id).get();
        assertIsDemoProduct(Product.fromProductPO(productPO));
    }
}
