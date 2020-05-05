package net.corejava.Libraray.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.corejava.Libraray.dao.LibraryRepo;
import net.corejava.Libraray.model.Library;

@Service
public class LibraryServiceImpl implements ILibraryService{
	@Autowired
	LibraryRepo repo ;
	
	@Override
	public Iterable<Library> findall(){
		Optional<Library> ss = repo.findById(1);
		return repo.findAll();
	}
	@Override
	public Optional<Library> findById(int id){
		return repo.findById(id);
	}
	
	@Override 
	public List<Map<Integer,String>> findIdAndName(){
		return repo.findIdAndName();
	}
	
}
