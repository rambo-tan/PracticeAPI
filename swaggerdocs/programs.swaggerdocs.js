/**
 * @swagger
 * tags:
 *   name: Programs
 *   description: API endpoints for managing programs
 */


/**
 * @swagger
 * /programs:
 *   post:
 *     summary: Create a new program
 *     description: Creates a new program with a programcode and description.
 *     tags:
 *       - Programs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - programcode
 *               - description
 *             properties:
 *               programcode:
 *                 type: string
 *                 example: "Cybersecurity Basics"
 *               description:
 *                 type: string
 *                 example: "An introductory program on cybersecurity concepts"
 *     responses:
 *       201:
 *         description: Program created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 programcode:
 *                   type: string
 *                 description:
 *                   type: string
 *       400:
 *         description: Bad request - missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 */


/**
 * @swagger
 * /programs/{programid}:
 *   put:
 *     summary: Update an existing program
 *     description: Updates the programcode, description, or isactive status of an existing program.
 *     tags:
 *       - Programs
 *     parameters:
 *       - in: path
 *         name: programid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the program to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - programcode
 *               - description
 *               - isactive
 *             properties:
 *               programcode:
 *                 type: string
 *                 example: "Cybersecurity Basics"
 *               description:
 *                 type: string
 *                 example: "An introductory program on cybersecurity concepts"
 *               isactive:
 *                 type: string
 *                 example: "true"
 *     responses:
 *       200:
 *         description: Program updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 programid:
 *                   type: integer
 *                 program:
 *                   type: string
 *                 description:
 *                   type: string
 *                 isactive:
 *                   type: boolean
 *       400:
 *         description: Bad request - missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 */
