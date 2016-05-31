def convertFlatIndexToPositionInMatrix(flatIndex, numColumns):
  # flatIndex starts at 1
  if flatIndex % numColumns == 0:
    return (flatIndex / numColumns - 1, numColumns - 1)
  else:
    return (flatIndex // numColumns, flatIndex % numColumns -1)

class Solution(object):
  def searchMatrix(self, matrix, target):
    numColumns = len(matrix[0])
    flatLength = len(matrix) * len(matrix[0])
    highFlatIndex = flatLength
    lowFlatIndex = 1
    midFlatIndex = (highFlatIndex + lowFlatIndex) // 2

        


print convertFlatIndexToPositionInMatrix(5, 5)