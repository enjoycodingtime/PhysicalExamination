USE [PE]
GO
/****** Object:  Table [dbo].[reservation]    Script Date: 05/21/2015 02:48:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[reservation](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
	[birthday] [varchar](50) NULL,
	[address] [varchar](500) NULL,
	[idCard] [varchar](50) NULL,
	[marriage] [varchar](50) NULL,
	[nationa] [varchar](50) NULL,
	[sex] [varchar](50) NULL,
	[phone_number] [varchar](50) NULL,
	[date] [varchar](50) NULL,
	[reservation_date] [varchar](50) NULL,
	[combo] [varchar](50) NULL,
	[totalAmount] [money] NULL,
	[physical_examination] [text] NULL,
	[status] [int] NULL,
 CONSTRAINT [PK__reservat__3213E83F1A14E395] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[reservation] ON
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (2, N'张勇', N'1993-02-02', N'内江市', N'511002199302026818', N'未婚', N'汉族', N'man', N'13408575842', N'2015/4/22', N'2015/4/22', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 1)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (3, N'黄晓栋', N'1993-02-02', N'内江市', N'511002199302026818', N'已婚', N'汉族', N'man', N'18202822783', N'2015/4/23', N'2015/4/23', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (4, N'朱玲', N'1993-02-02', N'成都市', N'511002199302026818', N'未婚', N'壮族', N'man', N'1820282275212', N'2015/4/24', N'2015/4/23', N'儿童套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"00J"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"00K"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"06C"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (5, N'徐璐', N'1993-02-02', N'郫县', N'511002199302026818', N'未婚', N'汉族', N'man', N'1821382489453', N'2015/4/24', N'2015/4/23', N'儿童套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"00J"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"00K"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"06C"},{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"01O"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"01P"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"01Q"},{"id":5,"office_name":"内科","project_name":"肺与胸膜","reference_standard":"了解呼吸音、有无罗音与炎症","$$hashKey":"01R"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (6, N'何炅', N'1993-02-02', N'湖南省', N'511002199302026818', N'已婚', N'汉族', N'man', N'18245781553', N'2015/4/25', N'2015/4/23', N'儿童套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"00J"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"00K"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"06C"}]', 1)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (7, N'维嘉', N'1993-02-02', N'长沙', N'511002199302026818', N'已婚', N'汉族', N'man', N'18780107660', N'2015/4/24', N'2015/4/23', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (8, N'海涛', N'1993-02-02', N'北京', N'511002199302026818', N'已婚', N'壮族', N'man', N'185653431684', N'2015/4/24', N'2015/4/23', N'儿童套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"00J"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"00K"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"06C"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (9, N'范冰冰', N'1994-01-25', N'内江市', N'513822199401254809', N'未婚', N'壮族', N'woman', N'13813888888', N'2015/4/24', N'2015/4/23', N'儿童套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"00J"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"00K"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"06C"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (10, N'李冰冰', N'1993-02-02', N'内江市', N'511002199302026818', N'已婚', N'汉族', N'man', N'13584588211221', N'2015/4/25', N'2015/4/23', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 1)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (11, N'黄玉敏', N'1994-01-25', N'内江市市中区', N'513822199401254809', N'未婚', N'彝族', N'woman', N'18202822783', N'2015/4/24', N'2015/4/23', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (12, N'成龙', N'1993-02-02', N'北京市', N'511002199302026818', N'已婚', N'维吾尔族', N'man', N'182028227823', N'2015/4/24', N'2015/4/23', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (13, N'古巨基', N'1993-02-02', N'香港铜锣湾', N'511002199302026818', N'已婚', N'汉族', N'man', N'13402587865', N'2015/4/24', N'2015/4/23', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (14, N'刘德华', N'1993-02-02', N'天津市', N'511002199302026818', N'已婚', N'汉族', N'man', N'18202822783', N'2015/4/23', N'2015/4/23', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (15, N'hello', N'1993-01-05', N'内经', N'511011199301058750', N'未婚', N'壮族', N'man', N'123123123', N'2015/4/25', N'2015/4/25', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 1)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (16, N'黄秋生', N'1990-07-30', N'内江市', N'513701199007306714', N'已婚', N'苗族', N'man', N'182002481534', N'2015/4/27', N'2015/4/25', N'儿童套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"00J"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"00K"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"06C"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (17, N'周润发', N'1992-12-05', N'高新区', N'511321199212052073', N'已婚', N'汉族', N'man', N'1822313234512', N'2015/4/26', N'2015/4/25', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 1)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (18, N'胡杨林', N'1992-07-14', N'西华大学', N'511381199207149344', N'已婚', N'汉族', N'woman', N'183531687515', N'2015/4/26', N'2015/4/25', N'儿童套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"00J"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"00K"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"06C"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (19, N'洋洋', N'1993-12-16', N'中和街道', N'510521199312160055', N'已婚', N'汉族', N'man', N'18202821464', N'2015/5/02', N'2015/4/25', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (20, N'王思潮', N'1991-10-28', N'中和街道', N'511322199110282579', N'已婚', N'壮族', N'man', N'1820234513354', N'2015/4/26', N'2015/4/25', N'自选', NULL, N'[{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"005"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"006"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (21, N'张四', N'1993-02-02', N'四川省内江市东兴区顺河镇骑龙村五组25号', N'511002199302026818', N'已婚', N'汉族', N'man', N'18202822783', N'2015/5/04', N'2015/5/3', N'儿童套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"00J"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"00K"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"06C"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (22, N'何兵', N'1993-02-02', N'四川省内江市东兴区顺河镇骑龙村五组25号', N'511002199302026818', N'已婚', N'汉族', N'man', N'18283145786', N'2015/5/09', N'2015/5/8', N'儿童套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"00J"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"00K"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"06C"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (23, N'何坤', N'1993-02-02', N'四川省内江市东兴区顺河镇骑龙村五组25号', N'511002199302026818', N'已婚', N'汉族', N'man', N'134789412712', N'2015/5/08', N'2015/5/8', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (24, N'孙悦', N'1993-02-02', N'四川省内江市东兴区顺河镇骑龙村五组25号', N'511002199302026818', N'已婚', N'汉族', N'man', N'136978945156', N'2015/5/08', N'2015/5/8', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (25, N'廖景', N'1993-02-02', N'四川省内江市东兴区顺河镇骑龙村五组25号', N'511002199302026818', N'已婚', N'汉族', N'man', N'18202822783.', N'2015/5/8', N'2015/5/8', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 1)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (26, N'古巨基', N'0806-05-30', N'四川省内江市东兴区顺河镇骑龙村五组25号', N'312011080605308', N'已婚', N'汉族', N'woman', N'136789075556', N'2015/5/16', N'2015/5/15', N'儿童套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"00J"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"00K"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"06C"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (27, N'111', N'0806-05-42', N'111', N'312011080605427', N'未婚', N'满族', N'woman', N'1111', N'2015/5/16', N'2015/5/15', N'学生套餐', NULL, N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (28, N'杜伊栋', N'1993-02-02', N'四川省内江市东兴区顺河镇骑龙村五组25号', N'511002199302026818', N'未婚', N'汉族', N'man', N'18208227833', N'2015/5/20', N'2015/5/19', N'自选', NULL, N'[{"combo_price":"11.0000","id":1,"office_name":"外科","physical_feature_id":"[]","price":"12.0000","project_name":"血压","$$hashKey":"011"},{"combo_price":"","id":2,"office_name":"外科","physical_feature_id":"","price":"","project_name":"胸廓","$$hashKey":"012"},{"combo_price":"","id":3,"office_name":"外科","physical_feature_id":"","price":"","project_name":"体重","$$hashKey":"013"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (32, N'11', N'1993-02-02', N'11', N'511002199302026818', N'已婚', N'壮族', N'man', N'123123', N'2015/5/20', N'2015/5/20', N'test', 11.0000, N'[{"combo_price":"11.0000","id":1,"office_name":"外科","physical_feature_id":"[]","price":"12.0000","project_name":"血压","$$hashKey":"021"}]', 1)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (33, N'王宝强', N'1993-02-02', N'中和镇', N'511002199302026818', N'已婚', N'壮族', N'man', N'18202822783', N'2015/5/20', N'?2015?年?5?月?20?日', N'自选', 12.0000, N'[{"combo_price":"11.0000","id":1,"office_name":"外科","physical_feature_id":"[]","price":"12.0000","project_name":"血压","$$hashKey":"00C"}]', 0)
INSERT [dbo].[reservation] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [totalAmount], [physical_examination], [status]) VALUES (34, N'邓超', N'1993-02-02', N'四川省内江市东兴区顺河镇骑龙村五组25号', N'511002199302026818', N'已婚', N'汉族', N'man', N'18202822783', N'2015/5/20', N'2015/5/20', N'自选', 12.0000, N'[{"combo_price":"11.0000","id":1,"office_name":"外科","physical_feature_id":"[]","price":"12.0000","project_name":"血压","$$hashKey":"05B"}]', 1)
SET IDENTITY_INSERT [dbo].[reservation] OFF
/****** Object:  Table [dbo].[registration]    Script Date: 05/21/2015 02:48:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[registration](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
	[birthday] [varchar](50) NULL,
	[address] [varchar](500) NULL,
	[idCard] [varchar](50) NULL,
	[marriage] [varchar](50) NULL,
	[nationa] [varchar](50) NULL,
	[sex] [varchar](50) NULL,
	[phone_number] [varchar](50) NULL,
	[date] [varchar](50) NULL,
	[reservation_date] [varchar](50) NULL,
	[combo] [varchar](50) NULL,
	[physical_examination] [text] NULL,
	[comments] [varchar](1000) NULL,
 CONSTRAINT [PK__registra__3213E83F1DE57479] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[registration] ON
INSERT [dbo].[registration] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [physical_examination], [comments]) VALUES (1, N'张勇', N'1993-02-02', N'内江市', N'511002199302026818', N'未婚', NULL, N'man', N'13408575842', N'2015/4/22', N'2015/4/22', N'学生套餐', N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D","result":"good"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F","result":"good1"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P","result":"good1"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W","result":"good2"}]', NULL)
INSERT [dbo].[registration] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [physical_examination], [comments]) VALUES (2, N'张可', N'1993-02-02', N'天府软件园', N'511002199302026818', N'已婚', NULL, N'man', N'18202582478', N'2015/4/23', N'2015/4/22', N'儿童套餐', N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"00J"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"00K","result":"1"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"06C"}]', NULL)
INSERT [dbo].[registration] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [physical_examination], [comments]) VALUES (3, N'何炅', N'1993-02-02', N'湖南省', N'511002199302026818', N'已婚', NULL, N'man', N'18245781553', N'2015/4/25', N'2015/4/23', N'儿童套餐', N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"00J"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"00K"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"06C"}]', NULL)
INSERT [dbo].[registration] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [physical_examination], [comments]) VALUES (4, N'何炅', N'1993-02-02', N'湖南省', N'511002199302026818', N'已婚', NULL, N'man', N'18245781553', N'2015/4/25', N'2015/4/23', N'儿童套餐', N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"00J"},{"id":2,"office_name":"内科","project_name":"胸廓","reference_standard":"有无异常胸廓","$$hashKey":"00K"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"06C"}]', NULL)
INSERT [dbo].[registration] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [physical_examination], [comments]) VALUES (5, N'李冰冰', N'1993-02-02', N'内江市', N'511002199302026818', N'已婚', NULL, N'man', N'13584588211221', N'2015/4/25', N'2015/4/23', N'学生套餐', N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', NULL)
INSERT [dbo].[registration] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [physical_examination], [comments]) VALUES (6, N'hello', N'1993-01-05', N'内经', N'511011199301058750', N'未婚', NULL, N'man', N'123123123', N'2015/4/25', N'2015/4/25', N'学生套餐', N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', NULL)
INSERT [dbo].[registration] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [physical_examination], [comments]) VALUES (7, N'周润发', N'1992-12-05', N'高新区', N'511321199212052073', N'已婚', NULL, N'man', N'1822313234512', N'2015/4/26', N'2015/4/25', N'学生套餐', N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P","result":"168cm"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W","result":"67kg"}]', NULL)
INSERT [dbo].[registration] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [physical_examination], [comments]) VALUES (8, N'周润发', N'1992-12-05', N'高新区', N'511321199212052073', N'已婚', NULL, N'man', N'1822313234512', N'2015/4/26', N'2015/4/25', N'学生套餐', N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D","result":"88"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F","result":"68/s"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P","result":"68kg"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W","result":"168cm"}]', NULL)
INSERT [dbo].[registration] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [physical_examination], [comments]) VALUES (9, N'廖景', N'1993-02-02', N'四川省内江市东兴区顺河镇骑龙村五组25号', N'511002199302026818', N'已婚', NULL, N'man', N'18202822783.', N'2015/5/8', N'2015/5/8', N'学生套餐', N'[{"id":1,"office_name":"内科","project_name":"血压","reference_standard":"是否正常","$$hashKey":"07D"},{"id":4,"office_name":"内科","project_name":"心率","reference_standard":"60~100次/分钟","$$hashKey":"07F"},{"id":3,"office_name":"外科","project_name":"体重","reference_standard":"升高","$$hashKey":"07P"},{"id":7,"office_name":"外科","project_name":"身高","reference_standard":"厘米","$$hashKey":"07W"}]', NULL)
INSERT [dbo].[registration] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [physical_examination], [comments]) VALUES (10, N'11', N'1993-02-02', N'11', N'511002199302026818', N'已婚', NULL, N'man', N'123123', N'2015/5/21', N'2015/5/20', N'test', N'[{"combo_price":"11.0000","id":1,"office_name":"外科","physical_feature_id":"[]","price":"12.0000","project_name":"血压","$$hashKey":"021"}]', NULL)
INSERT [dbo].[registration] ([id], [name], [birthday], [address], [idCard], [marriage], [nationa], [sex], [phone_number], [date], [reservation_date], [combo], [physical_examination], [comments]) VALUES (11, N'邓超', N'1993-02-02', N'四川省内江市东兴区顺河镇骑龙村五组25号', N'511002199302026818', N'已婚', NULL, N'man', N'18202822783', N'2015/5/21', N'2015/5/20', N'自选', N'[{"combo_price":"11.0000","id":1,"office_name":"外科","physical_feature_id":"[]","price":"12.0000","project_name":"血压","$$hashKey":"05B","result":"","conclusion":""}]', NULL)
SET IDENTITY_INSERT [dbo].[registration] OFF
/****** Object:  Table [dbo].[physical_feature]    Script Date: 05/21/2015 02:48:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[physical_feature](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
	[result] [varchar](50) NULL,
	[operator] [varchar](50) NULL,
	[compare_man] [varchar](50) NULL,
	[compare_woman] [varchar](50) NULL,
 CONSTRAINT [PK_physical_feathre] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[physical_feature] ON
INSERT [dbo].[physical_feature] ([id], [name], [result], [operator], [compare_man], [compare_woman]) VALUES (1, N'身高', N'偏高', N'<', N'200cm', N'180cm')
SET IDENTITY_INSERT [dbo].[physical_feature] OFF
/****** Object:  Table [dbo].[office]    Script Date: 05/21/2015 02:48:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[office](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[office_name] [varchar](50) NULL,
	[office_number] [varchar](50) NULL,
	[office_type] [bit] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[office] ON
INSERT [dbo].[office] ([id], [office_name], [office_number], [office_type]) VALUES (1, N'内科', N'101', 1)
INSERT [dbo].[office] ([id], [office_name], [office_number], [office_type]) VALUES (2, N'外科', N'102', 1)
INSERT [dbo].[office] ([id], [office_name], [office_number], [office_type]) VALUES (3, N'眼科', N'103', 1)
INSERT [dbo].[office] ([id], [office_name], [office_number], [office_type]) VALUES (4, N'耳鼻喉科', N'104', 1)
INSERT [dbo].[office] ([id], [office_name], [office_number], [office_type]) VALUES (5, N'口腔科', N'105', 1)
INSERT [dbo].[office] ([id], [office_name], [office_number], [office_type]) VALUES (6, N'妇科', N'106', 1)
INSERT [dbo].[office] ([id], [office_name], [office_number], [office_type]) VALUES (7, N'检验科', N'107', 1)
INSERT [dbo].[office] ([id], [office_name], [office_number], [office_type]) VALUES (8, N'放射科', N'110', 1)
INSERT [dbo].[office] ([id], [office_name], [office_number], [office_type]) VALUES (9, N'登记室', N'1001', 0)
INSERT [dbo].[office] ([id], [office_name], [office_number], [office_type]) VALUES (10, N'总检', N'118', 0)
INSERT [dbo].[office] ([id], [office_name], [office_number], [office_type]) VALUES (11, N'管理科', N'1002', 0)
SET IDENTITY_INSERT [dbo].[office] OFF
/****** Object:  Table [dbo].[conclusion]    Script Date: 05/21/2015 02:48:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[conclusion](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
	[conclusion] [varchar](150) NULL,
	[explain_disease] [varchar](150) NULL,
	[suggestion] [varchar](150) NULL,
 CONSTRAINT [PK_conclusion] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[conclusion] ON
INSERT [dbo].[conclusion] ([id], [name], [conclusion], [explain_disease], [suggestion]) VALUES (3, N'正常', N'很正常', N'无', N'无')
SET IDENTITY_INSERT [dbo].[conclusion] OFF
/****** Object:  Table [dbo].[combo]    Script Date: 05/21/2015 02:48:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[combo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[combo_name] [varchar](50) NULL,
	[combo_items] [varchar](1000) NULL,
	[combo_price] [money] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[combo] ON
INSERT [dbo].[combo] ([id], [combo_name], [combo_items], [combo_price]) VALUES (6, N'test', N'[{"combo_price":"11.0000","id":1,"office_name":"外科","physical_feature_id":"[]","price":"12.0000","project_name":"血压","$$hashKey":"021"}]', 11.0000)
SET IDENTITY_INSERT [dbo].[combo] OFF
/****** Object:  Table [dbo].[Users]    Script Date: 05/21/2015 02:48:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Users](
	[id] [varchar](50) NOT NULL,
	[name] [varchar](50) NULL,
	[password] [varchar](50) NULL,
	[position] [varchar](50) NULL,
	[office_id] [int] NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
INSERT [dbo].[Users] ([id], [name], [password], [position], [office_id]) VALUES (N'FJ1542', N'张柯', N'111111', N'分检医师', 3)
INSERT [dbo].[Users] ([id], [name], [password], [position], [office_id]) VALUES (N'FJ1546', N'王刚', N'111111', N'分检医师', 2)
INSERT [dbo].[Users] ([id], [name], [password], [position], [office_id]) VALUES (N'GL201540', N'admin', N'admin', N'管理员', 11)
INSERT [dbo].[Users] ([id], [name], [password], [position], [office_id]) VALUES (N'ZD1545', N'贾素芬', N'111111', N'总台医师', 9)
INSERT [dbo].[Users] ([id], [name], [password], [position], [office_id]) VALUES (N'ZG1545', N'刘大大', N'111111', N'科室主管', 1)
INSERT [dbo].[Users] ([id], [name], [password], [position], [office_id]) VALUES (N'ZJ1543', N'刘德华', N'111111', N'总检医师', 2)
/****** Object:  Table [dbo].[examination_project]    Script Date: 05/21/2015 02:48:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[examination_project](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[project_name] [varchar](50) NULL,
	[office_id] [int] NULL,
	[price] [money] NULL,
	[combo_price] [money] NULL,
	[physical_feature_id] [varchar](50) NULL,
 CONSTRAINT [PK__examinat__3213E83F07020F21] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[examination_project] ON
INSERT [dbo].[examination_project] ([id], [project_name], [office_id], [price], [combo_price], [physical_feature_id]) VALUES (1, N'血压', 2, 12.0000, 11.0000, N'[]')
INSERT [dbo].[examination_project] ([id], [project_name], [office_id], [price], [combo_price], [physical_feature_id]) VALUES (2, N'胸廓', 2, NULL, NULL, NULL)
INSERT [dbo].[examination_project] ([id], [project_name], [office_id], [price], [combo_price], [physical_feature_id]) VALUES (3, N'体重', 2, NULL, NULL, NULL)
INSERT [dbo].[examination_project] ([id], [project_name], [office_id], [price], [combo_price], [physical_feature_id]) VALUES (4, N'心率', 2, NULL, NULL, NULL)
INSERT [dbo].[examination_project] ([id], [project_name], [office_id], [price], [combo_price], [physical_feature_id]) VALUES (5, N'肺与胸膜', 2, NULL, NULL, NULL)
INSERT [dbo].[examination_project] ([id], [project_name], [office_id], [price], [combo_price], [physical_feature_id]) VALUES (7, N'身高', 2, NULL, NULL, NULL)
INSERT [dbo].[examination_project] ([id], [project_name], [office_id], [price], [combo_price], [physical_feature_id]) VALUES (8, N'视力', 2, NULL, NULL, NULL)
INSERT [dbo].[examination_project] ([id], [project_name], [office_id], [price], [combo_price], [physical_feature_id]) VALUES (9, N'色觉', 2, NULL, NULL, NULL)
INSERT [dbo].[examination_project] ([id], [project_name], [office_id], [price], [combo_price], [physical_feature_id]) VALUES (10, N'外耳道', 2, NULL, NULL, NULL)
INSERT [dbo].[examination_project] ([id], [project_name], [office_id], [price], [combo_price], [physical_feature_id]) VALUES (11, N'牙龈', 2, NULL, NULL, NULL)
INSERT [dbo].[examination_project] ([id], [project_name], [office_id], [price], [combo_price], [physical_feature_id]) VALUES (12, N'肝', 2, NULL, NULL, NULL)
INSERT [dbo].[examination_project] ([id], [project_name], [office_id], [price], [combo_price], [physical_feature_id]) VALUES (13, N'身高', 2, 8.0000, 5.0000, N'[1]')
SET IDENTITY_INSERT [dbo].[examination_project] OFF
/****** Object:  ForeignKey [FK_examination_project_office]    Script Date: 05/21/2015 02:48:14 ******/
ALTER TABLE [dbo].[examination_project]  WITH CHECK ADD  CONSTRAINT [FK_examination_project_office] FOREIGN KEY([office_id])
REFERENCES [dbo].[office] ([id])
GO
ALTER TABLE [dbo].[examination_project] CHECK CONSTRAINT [FK_examination_project_office]
GO
/****** Object:  ForeignKey [FK_Users_Users]    Script Date: 05/21/2015 02:48:14 ******/
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Users] FOREIGN KEY([office_id])
REFERENCES [dbo].[office] ([id])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Users]
GO
