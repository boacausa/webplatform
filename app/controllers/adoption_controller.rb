class AdoptionController < UserAreaController
  def index
    @pets = Pet.actived
  end

  def show
  end

  def edit
  end

  def new
  end
end
