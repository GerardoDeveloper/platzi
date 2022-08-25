import unittest
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By

class AssertionsTest(unittest.TestCase):
  
  def setUp(self):
    self.driver = webdriver.Chrome(executable_path=r'./Driver/chromedriver.exe')
    driver = self.driver
    driver.maximize_window()
    driver.get('http://demo-store.seleniumacademy.com')
  
  def tearDown(self):
    """
    docstring
    """
    self.driver.quit()
  
  def test_search_field(self):

    self.assertTrue(self.is_element_present(By.NAME, 'q'))

  def test_language_option(self):
    """
    docstring
    """
    self.assertTrue(self.is_element_present(By.ID, 'select-language'))
  
  def is_element_present(self, how, what):
    """
    Es una función de utilidad para identificar cuando un elemento esta presente de acuerdo
    a sus parásmetros
    
    Args:
        how: Nos indica el tipo de selector.\n
        what: Nos indica el valor que tendrá el selector.
    """
    try:
      self.driver.find_element(by = how, value= what)
    except NoSuchElementException as variable:
      return False
    return True
  
  if __name__ == "__main__":
    unittest.main(verbosity=2)