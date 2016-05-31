class Solution(object):
  def searchMatrix(self, matrix, target):
    flatLength = len(matrix) * len(matrix[0])
    highFlatIndex = flatLength - 1
    lowFlatIndex = 0
    midFlatIndex = (highFlatIndex + lowFlatIndex) // 2
    
        


