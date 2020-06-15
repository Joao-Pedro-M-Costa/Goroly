package com.Goroly.DTO;

import com.Goroly.domain.Produto;

public class ProdutoDTO {
	
	
	private long id;
	private String descricao;
	private String expecificacoes;
	private Number preco;
	
	public ProdutoDTO(Produto produto) {
		this.id = produto.getId();
		this.descricao = produto.getDescricao();
		this.expecificacoes = produto.getExpecificacoes();
		this.preco = produto.getPreco();
	}

	public long getId() {
		return id;
	}

	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public String getExpecificacoes() {
		return expecificacoes;
	}
	public void setExpecificacoes(String expecificacoes) {
		this.expecificacoes = expecificacoes;
	}
	

	public Number getPreco() {
		return preco;
	}
	public void setPreco(Number preco) {
		this.preco = preco;
	}

}
