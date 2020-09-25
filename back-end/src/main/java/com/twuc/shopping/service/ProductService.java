package com.twuc.shopping.service;

import com.twuc.shopping.domain.Product;
import com.twuc.shopping.error.ProductConflictException;
import com.twuc.shopping.po.ProductPO;
import com.twuc.shopping.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    final
    ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Integer addProduct(Product product) {
        if (productRepository.existsByName(product.getName())) {
            throw new ProductConflictException();
        }
        ProductPO productPO = product.toProductPO();
        productRepository.save(productPO);
        return productPO.getId();
    }

    public List<Product> getProducts() {
        return productRepository.findAll().stream().map(Product::fromProductPO)
                .collect(Collectors.toList());
    }
}
