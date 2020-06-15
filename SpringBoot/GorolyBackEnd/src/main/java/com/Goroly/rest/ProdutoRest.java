package com.Goroly.rest;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.Goroly.domain.Produto;
import com.Goroly.service.ProdutoService;


@RestController
@RequestMapping("/api")
public class ProdutoRest {
	
	@Autowired
	private ProdutoService produtoService;
	
	@PostMapping("/produto")
	public ResponseEntity<Produto> salvar(@RequestBody @Valid Produto produto){
		return ResponseEntity.ok(produtoService.salvar(produto));
		
	}
	@PutMapping("/produto")
	public ResponseEntity<Produto> update(@RequestBody @Valid Produto disciplina) {
		return ResponseEntity.ok(produtoService.update(disciplina));
	}
	

	@GetMapping("/produto/{id}")
	public ResponseEntity<Produto> consultaPorId(@PathVariable Long id) {
		return ResponseEntity.ok(produtoService.consultaPorId(id));
	}
	
	@GetMapping("/produto")
	public ResponseEntity<List<Produto>> listar() {
		return ResponseEntity.ok(produtoService.listar());
	}

	@DeleteMapping("/produto/{id}")
	public ResponseEntity deletePorId(@PathVariable Long id) {
		try {
			produtoService.deletePorId(id);
			return ResponseEntity.ok().build();
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}

	}

}
