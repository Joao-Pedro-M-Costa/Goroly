package com.Goroly.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Goroly.domain.Produto;

@Repository
public interface CarrinhoRepository extends JpaRepository<Produto,Long> {

}
