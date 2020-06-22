package com.Goroly.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Goroly.domain.Produto;
import com.Goroly.repository.CarrinhoRepository;

@Service
public class CarrinhoService {
	@Autowired
	private CarrinhoRepository carrinhoRepository;
		
	public Produto salvar(Produto produto) {
		return carrinhoRepository.save(produto);}
	
	public Produto consultaPorId(Long id) {
		return carrinhoRepository.findById(id).get();}
	
	
	public void deletePorId(Long id) {
		carrinhoRepository.deleteById(id);}
	
	
	public List<Produto> listar(){
		return carrinhoRepository.findAll();}
	
	public Produto update(Produto produto) {
		if(produto!=null) {
			return carrinhoRepository.save(produto);
		}
		throw new RuntimeException("Erro updating produto");
	}
}
