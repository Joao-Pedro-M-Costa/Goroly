package com.Goroly.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Goroly.domain.Usuario;
import com.Goroly.repository.UsuarioRepository;


@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public Long getSaldoByID(Long id) {
		return usuarioRepository.findById(id).get().getSaldo();
	}
		
	public Usuario salvar(Usuario usuario) {
		return usuarioRepository.save(usuario);}
	
	public Usuario consultaPorCPF(Long id) {
		return usuarioRepository.findById(id).get();}
	
	
	public void deletePorCPF(Long id) {
		usuarioRepository.deleteById(id);}
	
	
	public List<Usuario> listar(){
		return usuarioRepository.findAll();}
	
	public Usuario update(Usuario usuario) {
		if(usuario!=null) {
			return usuarioRepository.save(usuario);
		}
		throw new RuntimeException("Erro updating Usuario");
	}
	
}
