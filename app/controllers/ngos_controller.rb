class NgosController < UserAreaController
  def index
    @ngos = Ngo.all
  end
end
