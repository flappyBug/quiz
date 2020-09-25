package com.twuc.shopping.po;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductPO {
    @GeneratedValue
    @Id
    private Integer id;
    private String name;
    private Integer price;
    private String unit;
    private String image;
}
