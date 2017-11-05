require "test_helper"

feature 'Login' do
  scenario 'User try to login with empty credentials' do
    visit root_path

    within '#new_user' do
      fill_in 'Email', with: ''
      fill_in 'Password', with: ''
      click_button 'Log in'
    end

    page.current_path.must_equal new_user_session_path
  end
end