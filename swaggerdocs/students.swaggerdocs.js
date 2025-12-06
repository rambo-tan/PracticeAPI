/**
 * @swagger
 * tags:
 *   name: Students
 *   description: API endpoints for managing Students
 */


/**
 * @swagger
 * /students:
 *   post:
 *     summary: Create a new student
 *     description: Creates a new student record in the database.
 *     tags:
 *       - Students
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - lastname
 *               - firstname
 *               - email
 *               - programid
 *               - yearlevel
 *               - gender
 *               - dateofbirth
 *             properties:
 *               lastname:
 *                 type: string
 *                 example: "Manalo"
 *               firstname:
 *                 type: string
 *                 example: "Jasper"
 *               email:
 *                 type: string
 *                 example: "bradly@gmail.com"
 *               programid:
 *                 type: string
 *                 example: "4"
 *               yearlevel:
 *                 type: string
 *                 example: "4"
 *               gender:
 *                 type: string
 *                 example: "Male"
 *               dateofbirth:
 *                 type: string
 *                 format: date
 *                 example: "1994-12-24"
 *     responses:
 *       201:
 *         description: Student created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 101
 *                 firstname:
 *                   type: string
 *                   example: "Jasper"
 *                 lastname:
 *                   type: string
 *                   example: "Manalo"
 *                 programid:
 *                   type: integer
 *                   example: 4
 *                 yearlevel:
 *                   type: integer
 *                   example: 4
 *                 gender:
 *                   type: string
 *                   example: "Male"
 *                 dateofbirth:
 *                   type: string
 *                   format: date
 *                   example: "1994-12-24"
 *       400:
 *         description: Bad request - missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "firstname and lastname are required"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 *                 details:
 *                   type: string
 *                   example: "Error message from server"
 */
