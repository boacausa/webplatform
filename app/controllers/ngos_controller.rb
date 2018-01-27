class NgosController < UserAreaController
  def index
    @ngos = Ngo.actived
  end
end
