class CreateOngs < ActiveRecord::Migration[5.0]
  def change
    create_table :ongs do |t|
      t.string :razao_social
      t.string :nome_fantasia
      t.integer :telefone_fixo
      t.integer :telefone_celular
      t.string :email
      t.string :site
      t.integer :cnpj
      t.string :atividade
      t.date :data_inicio
      t.integer :banco
      t.integer :agencia
      t.integer :conta

      t.timestamps
    end
  end
end
