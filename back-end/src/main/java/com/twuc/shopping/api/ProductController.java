package com.twuc.shopping.api;


import com.twuc.shopping.domain.Product;
import com.twuc.shopping.error.ProductConflictException;
import com.twuc.shopping.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ProductController {

    final
    ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/product")
    public ResponseEntity<Void> addProduct(@Valid @RequestBody Product product) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .header("id", productService.addProduct(product).toString())
                .build();
    }

    @GetMapping("/product")
    public ResponseEntity<List<Product>> getProducts() {
        return ResponseEntity.ok(productService.getProducts());
    }

    @ExceptionHandler({ProductConflictException.class})
    public ResponseEntity<Error> handleException(ProductConflictException e) {
        return ResponseEntity.status(HttpStatus.CONFLICT)
                .body(new Error("product name exists"));
    }
}
