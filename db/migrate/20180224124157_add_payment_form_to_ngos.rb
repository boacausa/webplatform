# frozen_string_literal: true

class AddPaymentFormToNgos < ActiveRecord::Migration[5.1]
  def change
    add_column(:ngos, :payment_type, :string)
    add_column(:ngos, :payment_form, :text)
  end
end
