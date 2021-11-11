## Introduction

This a repo for me to document the mocking issues I see while I am use.
This is purely to show as code for displaying the error and not something anyone else to use.

## Issue
I think the issue with this is with supertest not reinitializing express between tests. 
Therefore the new middleware mock is not called.

## Workaround

Use external variable that can be set during the test to change the behavior of middleware. It's not the best way but it's a simple fix for integration testing. 
