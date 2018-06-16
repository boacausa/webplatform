class NgosController < UserAreaController
  def index
    @ngos = Ngo.actived
  end

  def show
    @ngo = if params[:id].is_a? Integer
             Ngo.find(params[:id])
           else
             fantasy_name = params[:id].downcase.gsub(/\s+/, '')
             Ngo.find_by_fantasy_name(fantasy_name).first
           end

    unless @ngo.present?
      render 'errors/not_found_page', layout: 'bootstrap_simple'
    end
  end
end
