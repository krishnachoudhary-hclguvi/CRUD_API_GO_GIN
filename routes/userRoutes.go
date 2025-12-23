package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/krishnachoudhary-hclguvi/controller"
	"github.com/krishnachoudhary-hclguvi/middleware"
)

func UserRoutes(router *gin.Engine) {
	router.POST("/signup", controller.Signup)
	router.POST("/login", controller.Login)

	protected := router.Group("/")
	protected.Use(middleware.AuthMiddleware())
	{
		protected.GET("/users", controller.GetUsers)
		protected.GET("/users/:id", controller.GetUserByID)
		protected.POST("/users", controller.CreateUser)
		protected.PUT("/users/:id", controller.UpdateUser)
		protected.DELETE("/users/:id", controller.DeleteUser)
	}
}
