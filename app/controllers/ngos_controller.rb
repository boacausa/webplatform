class NgosController < UserAreaController
  def index
    @ngos = Ngo.actived
  end

  def show
    @ngo = Ngo.find_by_fantasy_name(params[:id]).first || Ngo.find(params[:id])

    # TODO: render error page when @ngo not find
  end
end
