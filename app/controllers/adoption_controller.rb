class AdoptionController < UserAreaController
  def index
    @pets = Pet.active
  end

  def show
  end

  def edit
  end

  def new
  end
end
