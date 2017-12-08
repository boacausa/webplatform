class NgosController < ApplicationController
  def index
    @ngos = Ngo.all
  end
end
