import unittest
from pyunitreport import HTMLTestRunner
from selenium import webdriver

class HelloWord(unittest.TestCase):
  @classmethod
  def setUpClass(cls):
    cls.driver = webdriver.Chrome(executable_path=r'./Driver/chromedriver.exe')
    driver = cls.driver
    driver.implicitly_wait(10)
  
  def test_hello_word(self):
    driver = self.driver
    driver.get('https:www.platzi.com')
  
  @classmethod
  def tearDownClass(cls):
    cls.driver.quit()
  
if __name__ == "__main__":
    unittest.main(verbosity=2, testRunner=HTMLTestRunner(output= 'report', report_name= 'hello_word_report'))
