---
sidebar_position: 1
---

# Intro

This short tutorial will show you how to find and fix problems in your Java file using IntelliJ IDEA.


### What problems IntelliJ IDEA can find

IntelliJ IDEA automatically inspects the code of the file open in the editor and highlights all elements of code that require correction or can be improved. In IntelliJ IDEA, such elements are known as *problems*. Each problem has a severity level, which depends on the impact that the problem has on your program. This includes **Errors** (problems that break your program, such as the use of undeclared variables), **Warnings** (places for improvement, violations of programming style guides), and **Typos**.  
For more detailed description of severity levels, refer to [Change inspection severity](https://www.jetbrains.com/help/idea/configuring-inspection-severities.html).

### Identifying problems

The overall status of problem inspection is shown at the top right of the editor window.

To find and fix all problems in a file using IntelliJ IDEA found:
1. Press **⌘6**.
  This will display the **Problems** tab in the lower left corner.
2. Select the **Current File** tab to view only errors found in the file that is currently open in the editor.   
3. Double-click an error on the list.
  This will move your caret to the piece of code where the error was found.
  
### Fixing problems one by one

Besides fixing problems manually, you can use IntelliJ IDEA *quick fixes*.

To fix problems:
1. In the **Problems** tab, right-click a problem.
2. In the popup window, click **Show Quick Fixes**.
3. Select one of the quick fixes. 


:::note Note

The **Show Quick Fixes** can be unavailable if correcting an error requires an in-depth analysis of your code.

:::

### Automatic problem-fixing

IntelliJ IDEA can automate the process of problem fixing: correct all found problems at once, correct them before committing to Git or when you save the file. For more information, refer to [Clean up your code](https://www.jetbrains.com/help/idea/resolving-problems.html#clean-up-code).
