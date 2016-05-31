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
    while (highFlatIndex > lowFlatIndex):
      indices = convertFlatIndexToPositionInMatrix(midFlatIndex, numColumns)
      item = matrix[indices[0]][indices[1]]
      if target == item:
        return True
      elif target > item:
        lowFlatIndex = midFlatIndex + 1
        midFlatIndex = (highFlatIndex + lowFlatIndex) // 2
      else:
        highFlatIndex = midFlatIndex - 1
        midFlatIndex = (highFlatIndex + lowFlatIndex) // 2
    indices = convertFlatIndexToPositionInMatrix(highFlatIndex, numColumns)
    if target == matrix[indices[0]][indices[1]]:
      return True
    indices = convertFlatIndexToPositionInMatrix(lowFlatIndex, numColumns)
    if target == matrix[indices[0]][indices[1]]:
      return True
    return False
        


print convertFlatIndexToPositionInMatrix(5, 5)

def test():
  a = Solution()
  print a.searchMatrix([[1, 2], [3, 4]], 5)

test()