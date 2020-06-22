package com.Goroly.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="Carrinho")
public class Carrinho {
	
		@Id
		@Column(name="CPF")
		private String CPF;
		
		@OneToOne
		@MapsId
		private Usuario usuario;
		
		private String descricao;
		private String expecificacoes;
		private Number preco;
		public String getCPF() {
			return CPF;
		}
		public void setCPF(String cPF) {
			CPF = cPF;
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
