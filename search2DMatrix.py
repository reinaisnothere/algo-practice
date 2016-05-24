class Solution(object):
  def searchMatrix(self, matrix, target):
    midRowIndex = len(matrix) // 2
    midPositionInMidRow = len(matrix[midRowIndex]) // 2

    if matrix[midRowIndex][midPositionInMidRow] == target:
      return True
    elif matrix[midRowIndex][midPositionInMidRow] > target: # target to the left of mid point
      leftPositionInMidRow = 0
      if matrix[midRowIndex][leftPositionInMidRow] == target:
        return True
      elif matrix[midRowIndex][leftPositionInMidRow] > target:
        midRowIndex = midRowIndex // 2
      else: # target in mid row
        low = 0
        high = midPositionInMidRow - 1
        mid = high // 2
        while high > low:
          ## find target
    else:
      rightPositionInMidRow = len(matrix[0]) - 1
      if matrix[midRowIndex][rightPositionInMidRow] == target:
        return True
        


