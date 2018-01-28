class NgoArea::PetsController < NgoAreaController
  before_action :set_pet, only: %i[edit update destroy]

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
    #
  end

  def update
    @pet.update params_pet

    redirect_to ngo_area_pets_path
  end

  def destroy
    redirect_to ngo_area_pets_path if @pet.destroy!
  end

  private

  def set_pet
    @pet = Pet.find(params[:id])
  end

  def params_pet
    params.require(:pet).permit(:name, :age, :sex, :description, :image, :active)
  end
end
