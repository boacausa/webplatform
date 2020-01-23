class NgosController < UserAreaController
  def index
    @ngos = Ngo.active
  end

  def show
    @ngo = if StringValidation.only_numbers?(params[:id])
             Ngo.find(params[:id])
           else
             Ngo.find_by(fantasy_name_url: params[:id])
           end

    unless @ngo.present?
      render 'errors/not_found_page', layout: 'bootstrap_simple'
    end
  end
end
