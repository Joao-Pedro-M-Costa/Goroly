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

import com.Goroly.domain.Usuario;
import com.Goroly.service.UsuarioService;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class UsuarioRest {

	@Autowired
	private UsuarioService usuarioService ;
	
	@PostMapping("/usuario")
	public ResponseEntity<Usuario> salvar(@RequestBody @Valid Usuario usuario){
		return ResponseEntity.ok(usuarioService.salvar(usuario));
		
	}
	@PutMapping("/usuario")
	public ResponseEntity<Usuario> update(@RequestBody @Valid Usuario usuario) {
		return ResponseEntity.ok(usuarioService.update(usuario));
	}
	

	@GetMapping("/usuario/{id}")
	public ResponseEntity<Usuario> consultaPorCPF(@PathVariable String CPF) {
		return ResponseEntity.ok(usuarioService.consultaPorCPF(CPF));
	}
	
	@GetMapping("/usuario")
	public ResponseEntity<List<Usuario>> listar() {
		return ResponseEntity.ok(usuarioService.listar());
	}

	@DeleteMapping("/usuario/{CPF}")
	public ResponseEntity deletePorCPF(@PathVariable String CPF) {
		try {
			usuarioService.deletePorCPF(CPF);
			return ResponseEntity.ok().build();
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}

	}

}
