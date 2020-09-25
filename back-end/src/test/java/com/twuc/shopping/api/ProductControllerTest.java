package com.twuc.shopping.api;

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

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
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

    @Test
    void should_add_product() throws Exception {
        String imageUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601025033422&di=d8ed62cd66869e665f050334a84122b8&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F10693047709%2F1000.jpg";
        Product product = new Product("可乐", 2, "瓶", imageUrl);

        String productId = mockMvc.perform(post("/product")
                .content(objectMapper.writeValueAsString(product))
                .contentType(MediaType.APPLICATION_JSON)
        ).andExpect(status().isCreated()).andReturn().getResponse().getHeader("id");
        assertNotNull(productId);
        int id = Integer.parseInt(productId);
        ProductPO productPO = productRepository.findById(id).get();
        assertEquals("可乐", productPO.getName());
        assertEquals(2, productPO.getPrice());
        assertEquals("瓶", productPO.getUnit());
        assertEquals(imageUrl, productPO.getImage());
    }
}
