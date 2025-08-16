from PIL import Image
import os

# Open the input image
img = Image.open("C:\\Users\\HP\\OneDrive\\Desktop\\samrat mattress\\image\\tr.jpg")

# Define output directory
output_dir = "C:\\Users\\HP\\OneDrive\\Desktop\\samrat mattress"  # Change this to your desired folder
os.makedirs(output_dir, exist_ok=True)  # Create the folder if it doesn't exist

# Save the image to the specified location
output_path = os.path.join(output_dir, "output.jpg")
img.save(output_path, quality=95)
print(f"Image saved at {output_path}")

