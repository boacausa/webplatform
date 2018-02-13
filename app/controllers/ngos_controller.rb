class NgosController < UserAreaController
  def index
    @ngos = Ngo.actived
  end

  def show
    @ngo = Ngo.find(params[:id])
  end
end
