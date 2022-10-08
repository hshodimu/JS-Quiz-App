# JS-Quiz-App

A JavaScript quiz web app. Question set content taken from the IJI practice quiz site. Difference is when submit button is clicked, this quiz gives a review with right/wrong answers and the topic each question covers. You can download the files and run them on a modern browser.

There is a tiny inconsistency with grading. I used local storage to store each session's answers. Local storage can only save 1 answer at a time. On questions requiring multiple selections (4th and 9th questions), if the last choice selected isn't a correct answer (for example, selecting a correct answer, selecting an incorrect answer then moving to the next question), the quiz will grade the incorrect answer in local storage and count it wrong. Likewise, if you select incorrect choices but the last answer selected is correct, the quiz will grade the correct answer in local storage.
