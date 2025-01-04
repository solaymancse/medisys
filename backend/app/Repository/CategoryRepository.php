<?php


namespace App\Repository;

use App\Models\Category;

class CategoryRepository
{

    protected $model;

    public function __construct(Category $category)
    {
        $this->model = $category;
    }

    public function getAll()
    {
        return $this->model->latest()->get();
    }

    public function findById($id)
    {
        return $this->model->findOrFail($id);
    }

    public function create(array $data)
    {
        $data = $this->model->create($data);
        return successResponse($data, 'category created successfully', 201);
    }

    public function update($id, array $data)
    {
        $category = $this->findById($id);
        $category->update($data);
        return successResponse($category, 'category updated successfully', 200);
    }

    public function delete($id)
    {
        $category = $this->findById($id);
        return $category->delete();
    }
}
