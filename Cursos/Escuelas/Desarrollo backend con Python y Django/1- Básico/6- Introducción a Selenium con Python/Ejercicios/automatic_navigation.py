import unittest
from selenium import webdriver

class NavigationTest(unittest.TestCase):
  """
  docstring
  """
  def setUp(self):
    self.driver = webdriver.Chrome(executable_path=r'./Driver/chromedriver.exe')
    driver = self.driver
    driver.get('http://google.com')
    driver.maximize_window()
  
  def test_browser_navigation(self):
    """
    docstring
    """
    driver = self.driver
    search_field = driver.find_element_by_name('q')
    search_field.clear()
    search_field.send_keys('platzi')
    search_field.submit()
    driver.implicitly_wait(15)
    driver.back()
    driver.implicitly_wait(15)
    driver.forward()
    driver.implicitly_wait(15)
    driver.refresh()
    
    
  def tearDown(self):
    self.driver.quit()

if __name__ == "__main__":
    unittest.main(verbosity=2)