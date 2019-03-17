using Microsoft.EntityFrameworkCore.Migrations;

namespace BankASP.Migrations
{
    public partial class Inital : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsHide",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "IsHide",
                table: "Histories");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsHide",
                table: "Users",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsHide",
                table: "Histories",
                nullable: false,
                defaultValue: false);
        }
    }
}
