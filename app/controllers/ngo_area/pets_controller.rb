class NgoArea::PetsController < NgoAreaController
  def index
    @pets = Pet.all
  end

  def new
    @pet = Pet.new
  end

  def create
    @pet = Pet.create(params_pet)

    redirect_to ngo_area_pets_path
  end

  def edit
    @pet = Pet.find(params[:id])
  end

  def update
    @pet = Pet.find(params[:id])
    @pet.update params_pet

    redirect_to ngo_area_pets_path
  end

  private

  def params_pet
    params.require(:pet).permit(:name, :age, :sex, :description, :image)
  end
end
