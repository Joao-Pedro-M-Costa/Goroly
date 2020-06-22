package com.Goroly.rest;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Goroly.domain.Produto;
import com.Goroly.service.CarrinhoService;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class CarrinhoRest {

	@Autowired
	private CarrinhoService carrinhoService;
	
	@PostMapping("/Carrinho")
	public ResponseEntity<Produto> salvar(@RequestBody @Valid Produto produto){
		return ResponseEntity.ok(carrinhoService.salvar(produto));
		
	}
	@PutMapping("/Carrinho")
	public ResponseEntity<Produto> update(@RequestBody @Valid Produto disciplina) {
		return ResponseEntity.ok(carrinhoService.update(disciplina));
	}
	

	@GetMapping("/Carrinho/{id}")
	public ResponseEntity<Produto> consultaPorId(@PathVariable Long id) {
		return ResponseEntity.ok(carrinhoService.consultaPorId(id));
	}
	
	@GetMapping("/Carrinho")
	public ResponseEntity<List<Produto>> listar() {
		return ResponseEntity.ok(carrinhoService.listar());
	}

	@DeleteMapping("/Carrinho/{id}")
	public ResponseEntity deletePorId(@PathVariable Long id) {
		try {
			carrinhoService.deletePorId(id);
			return ResponseEntity.ok().build();
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}

	}

}
