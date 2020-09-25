package com.twuc.shopping.domain;

import com.twuc.shopping.po.ProductPO;
import lombok.Data;
import org.hibernate.validator.constraints.URL;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
public class Product {
    @NotBlank
    private String name;
    @NotNull
    private Integer price;
    @NotBlank
    private String unit;
    @URL
    private String image;

    public Product(@NotBlank String name, @NotNull Integer price, @NotBlank String unit, @URL String image) {
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public ProductPO toProductPO() {
        return ProductPO.builder()
                .image(image)
                .name(name)
                .price(price)
                .unit(unit)
                .build();
    }
}