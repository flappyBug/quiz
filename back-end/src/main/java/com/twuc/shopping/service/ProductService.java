package com.twuc.shopping.service;

import com.twuc.shopping.domain.Product;
import com.twuc.shopping.po.ProductPO;
import com.twuc.shopping.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public Integer addProduct(Product product) {
        ProductPO productPO = product.toProductPO();
        productRepository.save(productPO);
        return productPO.getId();
    }
}
