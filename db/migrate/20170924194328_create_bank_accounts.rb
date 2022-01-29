# frozen_string_literal: true

class CreateBankAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table(:bank_accounts) do |t|
      t.integer(:account_number)
      t.integer(:agency)
      t.integer(:bank)
      t.integer(:operation)
      t.references(:ngo, foreign_key: true)

      t.timestamps
    end
  end
end
