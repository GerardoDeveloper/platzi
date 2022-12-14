import unittest
from selenium import webdriver

class RegisterNewUser(unittest.TestCase):
  """
  docstring
  """
  def setUp(self):
    self.driver = webdriver.Chrome(executable_path=r'./Driver/chromedriver.exe')
    driver = self.driver
    driver.get('http://demo-store.seleniumacademy.com')
    driver.maximize_window()
    
  def test_new_user(self):
    driver = self.driver
    driver.find_element_by_xpath('/html/body/div/div[2]/header/div/div[2]/div/a/span[2]').click()
    driver.find_element_by_link_text('Log In').click()
    create_account_button = driver.find_element_by_xpath('/html/body/div/div[2]/div[2]/div/div/div[2]/form/div/div[1]/div[2]/a/span/span').click()
    self.assertTrue(create_account_button.is_displayed() and create_account_button.is_enabled)
    create_account_button.click()
    
    self.assertEqual('Create New Customer Account', driver.title)
    
    first_name = driver.find_element_by_id('first_name')
    middle_name = driver.find_element_by_id('middlename')
    last_name = driver.find_element_by_id('lastname')
    email_address = driver.find_element_by_id('email_address')
    new_letter_subscription = driver.find_element_by_id('is_subscription')
    password = driver.find_element_by_id('password')
    confirm_password = driver.find_element_by_id('confirmation')
    submit_button = driver.find_element_by_xpath('/html/body/div/div[2]/div[2]/div/div/div[2]/form/div[2]/button')
    
    self.assertTrue(first_name.is_enabled() and middle_name.is_enabled() and last_name.is_enabled() and
                    email_address.is_enabled() and new_letter_subscription.is_enabled() and password.is_enabled()
                    and confirm_password.is_enabled() and submit_button.is_enabled())
    
    first_name.send_keys('Test')
    driver.implicitly_wait(1)
    middle_name.send_keys('Test')
    driver.implicitly_wait(2)
    last_name.send_keys('Test')
    driver.implicitly_wait(3)
    email_address.send_keys('Test@testingmail.com')
    password.send_keys('Test')
    confirm_password.send_keys('Test')
    submit_button.click()


  def tearDown(self):
      self.driver.close()

if __name__ == "__main__":
      unittest.main(verbosity=2)