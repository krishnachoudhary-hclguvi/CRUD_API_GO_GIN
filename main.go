package main

import (
	"github.com/gin-gonic/gin"
	"github.com/krishnachoudhary-hclguvi/config"
	"github.com/krishnachoudhary-hclguvi/middleware"
	"github.com/krishnachoudhary-hclguvi/routes"
)

func main() {
	config.ConnectDB()
	router := gin.Default() //receptionist
	router.Use(middleware.CORSMiddleware())
	// router.GET("/test", func(c *gin.Context) { //visitor  details like email name
	// 	c.JSON(200, gin.H{
	// 		"message": "Welcome to the Go CRUD Application",
	// 	})
	// })
	routes.UserRoutes(router)
	router.Run(":8080")
}
