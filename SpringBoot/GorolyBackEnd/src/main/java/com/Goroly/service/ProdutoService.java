package com.Goroly.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Goroly.domain.Produto;
import com.Goroly.repository.ProdutoRepository;


@Service
public class ProdutoService {

	@Autowired
	private ProdutoRepository produtoRepository;
		
	public Produto salvar(Produto produto) {
		return produtoRepository.save(produto);}
	
	public Produto consultaPorId(Long id) {
		return produtoRepository.findById(id).get();}
	
	
	public void deletePorId(Long id) {
		produtoRepository.deleteById(id);}
	
	
	public List<Produto> listar(){
		return produtoRepository.findAll();}
	
	public Produto update(Produto produto) {
		if(produto!=null) {
			return produtoRepository.save(produto);
		}
		throw new RuntimeException("Erro updating produto");
	}

}
