/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package hibernate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author Geeth Kalhara
 */
@Entity
@Table(name = "address")
public class Address {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    
    @Column(name = "line_1",nullable = false)
    private String line_1; 
    
    @Column(name = "line_2",nullable = false)
    private String line_2; 
    
    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city; 
    
    @Column(name = "postal_code",length = 5, nullable = false)
    private String postal_code; 
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user; 
    
    public Address(){}

    /**
     * @return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return the line_1
     */
    public String getLine_1() {
        return line_1;
    }

    /**
     * @param line_1 the line_1 to set
     */
    public void setLine_1(String line_1) {
        this.line_1 = line_1;
    }

    /**
     * @return the line_2
     */
    public String getLine_2() {
        return line_2;
    }

    /**
     * @param line_2 the line_2 to set
     */
    public void setLine_2(String line_2) {
        this.line_2 = line_2;
    }

    /**
     * @return the city
     */
    public City getCity() {
        return city;
    }

    /**
     * @param city the city to set
     */
    public void setCity(City city) {
        this.city = city;
    }

    /**
     * @return the postal_code
     */
    public String getPostal_code() {
        return postal_code;
    }

    /**
     * @param postal_code the postal_code to set
     */
    public void setPostal_code(String postal_code) {
        this.postal_code = postal_code;
    }

    /**
     * @return the user
     */
    public User getUser() {
        return user;
    }

    /**
     * @param user the user to set
     */
    public void setUser(User user) {
        this.user = user;
    }
    
}
