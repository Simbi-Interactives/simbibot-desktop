export const config = {
  base_url: "https://learn.simbibot.com/api/", // change b4 push
  /**
   * Version name  is the name of the version of this app for this duplicate
   */
  version_name: "utme",
  /**
   * Background color of the current app clone
   */
  background_color: "#1e4a32",
  /**
   * Logo to be put in the header
   */
  logo_dir: "assets/imgs/jamblogo.png",
  /**
   * Text color hexcode or name of color.
   */
  text_color: "white",

  storybook: "Sweet Sixteen",

  forgotPassword: "https://learn.simbibot.com/password/reset",

  super_exam_id: 1,

  exams: [
    {
      name: "waec",
      background_color: "rgb(52, 14, 103)",
      image_url: "assets/imgs/waec.png",
    },
    {

      name: "utme",
      background_color: "#1e4a32",
      image_url: "assets/imgs/jamblogo.png",
    }
  ],

  version: '1.0.1',
  db_name: 'data.db'
};
