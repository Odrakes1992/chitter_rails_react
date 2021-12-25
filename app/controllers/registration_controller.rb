class RegistrationController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:username]  = @user.username
      session[:user_id] = @user.id

      redirect_to feed_path

    else
      render :new

    end
  end


  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :username)
  end

end
