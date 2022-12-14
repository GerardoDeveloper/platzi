import unittest
from selenium import webdriver

class CompareProduct(unittest.TestCase):
  """
  docstring
  """
  def setUp(self):
    self.driver = webdriver.Chrome(executable_path=r'./Driver/chromedriver.exe')
    driver = self.driver
    driver.get('http://demo-store.seleniumacademy.com')
    driver.maximize_window()
    
  def test_compare_products_removal_alerts(self):
    """
    docstring
    """
    driver = self.driver
    search_field = driver.find_element_by_name('q')
    search_field.clear()
    search_field.send_keys('tee')
    search_field.submit()
    driver.find_element_by_class_name('link-compare').click()
    driver.find_element_by_link_text('Clear All').click()
    alert = driver.switch_to_alert()
    alert_text = alert.text
    self.assertEqual('Are you sure you would like to remove all products from your comparison?', alert_text)
    alert.accept()
    

  def tearDown(self):
    self.driver.quit()

if __name__ == "__main__":
    unittest.main(verbosity=2)